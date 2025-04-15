import CategoryItem from "../components/CategoryItem";



const categories = [
	{ href: "/Джинсы", name: "Джинсы", imageUrl: "/jeans.jpg" },
	{ href: "/Футболки", name: "Футболки", imageUrl: "/tshirts.jpg" },
	{ href: "/Обувь", name: "Обувь", imageUrl: "/shoes.jpg" },
	{ href: "/Очки", name: "Очки", imageUrl: "/glasses.png" },
	{ href: "/Куртки", name: "Куртки", imageUrl: "/jackets.jpg" },
	{ href: "/Костюмы", name: "Костюмы", imageUrl: "/suits.jpg" },
	{ href: "/Сумки", name: "Сумки", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Исследуйте наши Категории
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
				Откройте для себя последние тенденции в области экологичной моды
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				
			</div>
		</div>
	);
};
export default HomePage;