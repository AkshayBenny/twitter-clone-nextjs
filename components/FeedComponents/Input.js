import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useSession, signOut } from 'next-auth/react';
import { useState, useRef } from 'react';
import { db, storage } from '../../firebase';
export default function Input() {
  const { data: session } = useSession();
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const sendPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    const docRef = await addDoc(collection(db, 'posts'), {
      id: session.user.uid,
      text: input,
      name: session.user.name,
      userImg: session.user.image,
      userName: session.user.username,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedImage) {
      await uploadString(imageRef, selectedImage, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        });
      });
    }
    setInput('');
    setSelectedImage(null);
    setLoading(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvent) => {
        setSelectedImage(readerEvent.target.result);
      };
    }
  };

  return (
    <form onSubmit={sendPost} className='border-b p-4 flex space-y-4'>
      <img
        onClick={signOut}
        src={
          session
            ? session.user.image
            : 'https://eschoolz.in/schoolz/backup/app/stories/images/user.png'
        }
        alt='profile picture'
        className='rounded-full w-11 h-11 mt-4  hover:brightness-95 transition cursor-pointer object-cover'
      />

      <div className='w-full flex-grow'>
        <div className='border-b w-full mb-4'>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows='2'
            className='w-full min-h-[50px] text-lg text-gray-700 placeholder-gray-500   tracking-wide border-none focus:ring-0 outline-none'
            type='text'
          />
        </div>
        {selectedImage && (
          <div className='relative'>
            <div
              onClick={() => setSelectedImage(null)}
              className='absolute p-1 top-2 right-2 cursor-pointer rounded-full bg-white opacity-50 hover-gray hover:opacity-70 transition duration-300'
            >
              <XIcon className='h-5 rounded-full' />
            </div>
            <img
              src={selectedImage}
              alt='selected image'
              className='object-cover pb-12 rounded'
            />
          </div>
        )}
        <div className='flex justify-between items-center'>
          <div className='text-sky-500 flex space-x-2'>
            <PhotographIcon
              className='h-10 hover-gray rounded-full p-1'
              onClick={() => filePickerRef.current.click()}
            />
            <input
              type='file'
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <EmojiHappyIcon className='h-10 hover-gray rounded-full p-1' />
          </div>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <button
                disabled={!input.trim()}
                type='submit'
                className='bg-sky-400 px-6 py-3 text-lg rounded-full text-white font-bold blue-btn disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Tweet
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
