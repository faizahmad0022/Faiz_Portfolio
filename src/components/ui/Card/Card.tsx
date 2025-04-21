interface CardProps {
  href: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ href, title, description }) => {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
      // backgroundColor: "#990011"
    }}>
      <a
        href={href}
        //   className=" max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-60"
        style={{
          width: '100%',
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#FFF'
        }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </div>
  );
};

export default Card;
