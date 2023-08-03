import NestLogo from "../assets/img/NestLogo.png";
import NextLogo from "../assets/img/NextLogo.png";
import TypeORMLogo from "../assets/img/TypeORMLogo.png";
import PrismaORMLogo from "../assets/img/prisma-logo.png";
import PostgreSQL from "../assets/img/postgresql-logo.png";
import Python from "../assets/img/Python-logo.png";
import ReactLogo from "../assets/img/React-icon.png";
import TypeScriptLogo from "../assets/img/typescriptLogo.png";
import JSLogo from "../assets/img/javascriptLogo.png";
import Unreal5Logo from "../assets/img/Unreal5Logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={JSLogo} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={TypeScriptLogo} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={ReactLogo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={NestLogo} alt="Image" />
                                <h5>NestJS</h5>
                            </div>
                            <div className="item">
                                <img src={NextLogo} alt="Image" />
                                <h5>Next</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Unreal5Logo} alt="Image" />
                                <h5>Unreal 5</h5>
                            </div>
                            <div className="item">
                                <img src={PostgreSQL} alt="Image" />
                                <h5>Postgresql</h5>
                            </div>
                            <div className="item">
                                <img src={PrismaORMLogo} alt="Image" />
                                <h5>Prisma ORM</h5>
                            </div>
                            <div className="item">
                                <img src={TypeORMLogo} alt="Image" />
                                <h5>typeORM</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
