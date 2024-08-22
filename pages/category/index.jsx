import style from './category.module.scss'
import rightArrow from '../../public/images/icons/right-arrow-svgrepo-com.svg'
import Image from 'next/image';
import Filter from '@/components/Filter/Filter';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function CategoryPage() {
  return (
    <div className={style.category}>
      <span className={style.location}>
        Home
        <Image src={rightArrow} alt="rightController" width="30" height="12"/>
        Casual
      </span>
      <div className={style.categoryData}>
        <div className={style.filterContainer}>
          <Filter/>
        </div>
        <div className={style.clothesContainer}>
          <div>
            <span>Casual</span>
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
