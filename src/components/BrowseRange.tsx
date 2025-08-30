type Range = {
  label: string;
  img: string;
};

interface BrowseRangeProps {
  ranges: Range[];
}

export const BrowseRange: React.FC<BrowseRangeProps> = ({ ranges }) => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
      <p className="text-gray-500 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 w-[100%]">
        {ranges.map((item, idx) => (
          <div key={idx} className="rounded overflow-hidden ">
            <img
              src={item.img}
              alt={item.label}
              className="w-[95%] lg-h-100 rounded-2xl"
            />
            <div className="pr-8">
              <h3 className="text-center py-4 text-lg font-semibold">
                {item.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

