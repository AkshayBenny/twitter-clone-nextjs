export default function News({ news }) {
  return (
    <a
      href={news.url}
      target='_blank'
      rel='noreferrer'
      className=' tracking-wider text-base cursor-pointer flex items-center justify-between space-x-1 px-4 py-2  hover:bg-sky-100  transition duration-200'
    >
      <div>
        <p className="text-sm font-bold">{news.title}</p>
        <p className='font-normal pt-1 text-xs'>{news.source.name}</p>
      </div>
      <img
        className='rounded-xl'
        width='70'
       
        src={news.urlToImage}
        alt={news.title}
      />
    </a>
  );
}
