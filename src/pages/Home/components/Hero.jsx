import { Link } from "react-router-dom";
import HeroinePNG from "../../../assets/images/heroine.png"

export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row dark:text-slate-100 items-center pl-100px'>
      <div className='text ml-auto'>
        <h1 className='text-5xl font-bold'>Online Shopping </h1>
        <h3 className='text-4xl'>
          Super value deals{" "}
          <span className='text-emerald-500'>On all Products</span>
        </h3>
        <h1 className='text-2xl'>
          Shop Now with <span className='text-sky-500 font-bold'>ShopNow</span>
        </h1>
        <p className='text-2xl my-7 px-1 dark:text-slate-300'>
          Save more with coupons & up to 70% off!
        </p>
        <Link to='/products' type='button' className='text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-sky-300 dark:hover:bg-sky-500 focus:outline-none dark:focus:ring-sky-800'>
          Shop Now
        </Link>
      </div>
      <div className='visual ml-20 lg:max-w-xl'>
        <img
          className='rounded-lg max-h-full'
          src={HeroinePNG}
          alt='ShopNow Hero Section'
        />
      </div>
    </section>
  );
};
