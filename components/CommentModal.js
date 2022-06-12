import { useRecoilState } from 'recoil';
import { commentModalState, postIdState } from '../atom/commentModalAtom';
import Modal from 'react-modal';
import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import Moment from 'react-moment';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function CommentModal() {
  const [open, setOpen] = useRecoilState(commentModalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const { data: session } = useSession();

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const sendComment = async (e) => {
    e.preventDefault();
    setOpen(false);
    setInput('');
    await addDoc(collection(db, 'posts', postId, 'comments'), {
      name: session?.user?.name,
      username: session?.user?.username,
      userId: session?.user?.uid,
      userImg: session?.user?.image,
      comment: input,
      timestamp: serverTimestamp(),
    });

    router.push(`/posts/${postId}`);
  };

  useEffect(() => {
    onSnapshot(doc(db, 'posts', postId), (snapshot) => setPost(snapshot));
  }, [db, postId]);

  if (open) {
    return (
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className='max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-300 rounded-xl shadow-md '
      >
        <div className='border-b border-gray-200 w-full'>
          <div
            onClick={() => setOpen(false)}
            className='hover-gray rounded-full transition duration-300 w-fit p-2 m-2 cursor-pointer ease-out flex justify-center items-center'
          >
            <XIcon className='h-6' />
          </div>
        </div>
        <div className='p-4 relative'>
          <span className='w-0.5 h-full bg-gray-200 absolute left-9 z-[-1] top-12' />
          <div className='flex items-center space-x-2'>
            <img
              src={post?.data()?.userImg}
              alt='profile picture'
              className='rounded-full w-11 h-11  hover:brightness-95 transition cursor-pointer object-cover'
            />

            <div>
              <div className='flex items-center space-x-2'>
                <div className='flex items-center space-x-2'>
                  <h1 className='hover:underline cursor-pointer text-xl xl:text-2xl font-bold tracking-wide truncate'>
                    {post?.data()?.name}
                  </h1>
                  <p className='text-gray-600 text-lg hover:underline cursor-pointer truncate'>
                    @{post?.data()?.userName}
                  </p>
                </div>
                <p className='text-gray-800 text-base hover:underline cursor-pointer truncate'>
                  - <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
                </p>
              </div>
              <div>
                <h1 className='font-normal text-xl text-gray-500'>
                  {post?.data()?.text}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={sendComment} className='p-4 flex space-y-4'>
          <input type='text' className='hidden' />
          <img
            src={session.user.image}
            alt='profile picture'
            className='rounded-full w-11 h-11 mt-4  hover:brightness-95 transition cursor-pointer object-cover'
          />
          <div className='w-full flex-grow'>
            <div className='border-b w-full mb-4'>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Tweet your reply'
                rows='2'
                className='w-full min-h-[50px] text-lg text-gray-700 placeholder-gray-500   tracking-wide border-none focus:ring-0 outline-none'
                type='text'
              />
            </div>

            <div className='flex justify-between items-center'>
              <div className='text-sky-500 flex space-x-2'>
                <PhotographIcon
                  className='h-10 hover-gray rounded-full p-1'
                  // onClick={() => filePickerRef.current.click()}
                />
                {/* <input
                    type='file'
                    hidden
                    ref={filePickerRef}
                    onChange={addImageToPost}
                  /> */}
                <EmojiHappyIcon className='h-10 hover-gray rounded-full p-1' />
              </div>
              <div>
                <button
                  disabled={!input.trim() || loading}
                  type='submit'
                  className={`bg-sky-400 px-6 py-3 text-lg rounded-full text-white font-bold blue-btn disabled:opacity-50 disabled:cursor-not-allowed ${
                    loading && 'animate-bounce'
                  }`}
                >
                  {loading ? 'Replying...' : 'Reply'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}
