import { Button } from "./Button";

export const HeroText = () => {
  return (
    <div className="flex flex-col justify-center w-[100%]  max-w-sm">
      <h2 className="text-3xl font-bold text-neutral-900 leading-snug">
        50+ Beautiful rooms inspiration
      </h2>
      <p className="mt-4 text-sm text-neutral-500">
        Our designer already made a lot of beautiful prototype of rooms that inspire you
      </p>
      <Button className="mt-6 w-fit bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a27b27]"
       children="Explore More"
      />
    </div>
  );
}
