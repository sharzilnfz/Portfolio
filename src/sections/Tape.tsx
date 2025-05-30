import StarIcon from '@/assets/icons/star.jsx';
import { Fragment } from 'react';

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip mt-20">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div
          className="flex"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex flex-none gap-4 pr-4 py-4 animate-move-left [animation-duration:50s] ">
            {' '}
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div
                    key={word + index}
                    className="inline-flex gap-4 items-center"
                  >
                    <span className="text-gray-900 uppercase  text-sm font-extrabold font-sans">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
