import * as React from "react";
import { Auth } from "../../types/User";

export interface HomePageProps {
  auth: Auth;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const linkClasses = "link orange hover-green pointer pa3";
  console.log(props);
  
  const { auth } = props;
  return (
    <div className="w-50 center pa4">
      <h2 className="green">Vọc cùng Thành #14</h2>
      <img
        className="db w-100 mb3"
        src="//picsum.photos/960/400"
        alt="banner"
      />
      <h3>Hello, {auth.user.displayName}</h3>
      <p className="lh-copy">
        I'm glad you made it. Here are some links that you might be interested
        in:
      </p>
      <div className="flex justify-center items-center">
        <a
          className={linkClasses}
          href="https://github.com/EGANY-Team/vct-14-cypress"
        >
          Github
        </a>
        <a className={linkClasses} href="https://devnow.vn/?p=3279">
          DevNow
        </a>
      </div>
    </div>
  );
};

export default HomePage;
