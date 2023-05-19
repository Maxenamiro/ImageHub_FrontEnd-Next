import { Header } from '@/components/Header';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const products = [
  {
    id: 1,
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1539&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1080',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1081',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 5,
    href: '#',
    imageSrc: 'https://picsum.photos/1920/1082',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];

export default function MainPage() {
  return (
    <>
      <Header />
      <ScrollToTopButton />

      <div className="bg-white">
        <div className="mx-auto">
          <div className=" grid grid-cols-1">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-full aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
