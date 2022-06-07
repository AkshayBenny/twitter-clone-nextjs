import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <div className='flex  bg-sky-50 flex-col md:flex-row  items-center justify-center h-screen'>
      <img
        src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-02/ch-2-7-app-store.png.twimg.1920.png'
        alt='twitter app on phone'
        className='bg-sky-50 h-96 pb-12 md:pb-0 '
      />
      <div>
        {Object.values(providers).map((provider, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center md:items-start justify-center'
            >
              <img
                src='https://pngimg.com/uploads/twitter/twitter_PNG3.png'
                alt='twitter logo'
                className='h-12 hover-gray rounded-full hover:bg-sky-100 transition'
              />
              <p className='italic text-xl py-4'>
                Cloned with ❤️ by Akshay Benny
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className='blue-btn px-4 text-xl py-3 rounded-lg border border-sky-400 hover:bg-sky-50 hover:text-sky-400 hover:shadow-none'
              >
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
