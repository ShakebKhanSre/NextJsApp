import Image from "next/image";

const index = () => {
  //   const myLoader = ({src,width,quality}) => {
  //     return 'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg'
  //   };
  return (
    <div>
      Image :
      <Image
        src={
          "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        }
        width={100}
        height={100}
        alt="Code Image"
        // loader={myLoader}
      />
    </div>
  );
};

export default index;
