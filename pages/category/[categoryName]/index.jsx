import style from './categoryName.module.scss'
import rightArrow from '../../../public/images/icons/right-arrow-svgrepo-com.svg'
import Image from 'next/image';
import Filter from '@/components/Filter/Filter';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useRouter } from 'next/router';
import { ConvertToTitleCase } from '@/util/constantFunctions';
import Link from 'next/link';

export default function CategoryPage() {
    const router = useRouter()
    const categoryName = router.query.categoryName
    return (
    <div className={style.category}>
        <span className={style.location}>
            <Link href="/" className='link linkHover'>Home</Link>
            <Image src={rightArrow} alt="rightController" width="30" height="12"/>
            {ConvertToTitleCase(categoryName)}
        </span>
        <div className={style.categoryData}>
        <div className={style.filterContainer}>
            <Filter/>
        </div>
        <div className={style.clothesContainer}>
            <div>
            <span>{ConvertToTitleCase(categoryName)}</span>
            <span>Showing 1-10 of 100 products sort by: Most Popular</span>
            </div>
            <div className={style.products}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </div>
        </div>
        </div>
    </div>
    );
}
