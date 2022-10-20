import { BallTriangle } from 'react-loader-spinner';
import style from './Loader.module.css'

export const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={style.loader}
      wrapperStyle=""
      visible={true}
    />
  );
};
