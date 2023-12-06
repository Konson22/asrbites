export function Logo({ cName }) {
  return (
    <div className={`items-center ${cName}`}>
      <p className="md:block hidden logo-text text-2xl font-bold w-full">
        لي ثري
      </p>
      <img
        className="md:h-14 md:w-14 h-10 w-10"
        src={process.env.PUBLIC_URL + "/images/cupcake.png"}
        alt="Leee3"
      />
    </div>
  );
}
