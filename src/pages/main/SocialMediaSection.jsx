

export default function SocialMediaSection() {
  return (
    <div className="md:flex md:px-[8%] my-[4rem]">
        <div className="md:w-[30%] p-8 bg-rose-800 text-white text-center">
            <h2 className="text-2xl">@Instagram</h2>
            <h3 className="text-3xl">10k Follower</h3>
            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et</p>
            <button className="px-5 py-2 rounded-xl">
                Follow us
            </button>
        </div>
        <div className="flex-1 grid grid-cols-3">
            {[...new Array(6)].map(i => (
                <div className="md:h-[230px] h-[190px] bg-red-300">
                    <img src={process.env.PUBLIC_URL+'/images/pistachio.jpeg'} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}
