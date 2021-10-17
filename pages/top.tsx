import Post from '../img/post.jpg'
import Ranking from '../img/ranking.jpg'
import Hire from '../img/hire.jpg'
// import { Card, Icon,  } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link';
// import '../styles/globals.css'

export default function Top() {
  return (

    <div className="App">
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Agency - Start Bootstrap Theme</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            </head>
            <body id="page-top">
                <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading">エンジョブへようこそ</div>
                        <div className="masthead-heading text-uppercase">ポートフォリオ見せようぜ！</div>
                        <a className="btn btn-primary btn-xl text-uppercase" href="#services">エンジョブとは</a>
                    </div>
                </header>
                {/* <!-- Services--> */}
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">エンジョブとは</h2>
                            <h3 className="section-subheading text-muted">自分が作った作ったポートフォリオを投稿して評価してもらうサービスです。<br/>これからポートフォリオを作る方の参考になります。<br/>人事の目に止まれば採用の可能性あり！</h3>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <h4 className="my-3">ポートフォリオ投稿</h4>
                                <Image src={Post} alt="..." width = "300" height="200" />
                                <p className="text-muted">ポートフォリオを投稿しこれから作る人の参考になります。</p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="my-3">ポートフォリオランキング</h4>
                                <Image src={Ranking} alt="..." width = "300" height="200" />
                                <p className="text-muted">ポートフォリオを評価してもらいランキングをつけます。</p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="my-3">企業にアピール</h4>
                                <Image src={Hire} alt="..." width = "300" height="200" />
                                <p className="text-muted">投稿した作品が企業さんの目に止まるかも！！</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Portfolio Grid--> */}
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">ポートフォリ総合オランキング</h2>
                        </div>
                        <div className="container">
  <div className="row">
    <div className="col-md-4">
      <p>１位</p>
      <div className="card card-1">
      <Image alt="alt" src={Post} width="100%" height="100%" />
        <h3>Ionic Native</h3>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>

      </div>
    </div>
    <div className="col-md-4">
    <p>２位</p>
      <div className="card card-1">
      <Image alt="post" src={Post} width="100%" height="100%"  />
        <h3>Ionic Native</h3>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
      </div>
    </div>
    <div className="col-md-4">
    <p>３位</p>
      <div className="card card-1">
      <Image alt="post" src={Post} width="100%" height="100%" />
        <h3>Ionic Native</h3>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
      </div>
    </div>
  </div>
  {/* <a className="btn btn-primary btn-xl text-uppercase" href="/">他の作品を見る</a> */}

</div>

                    </div>
                </section>
                {/* <!-- About--> */}
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">ポートフォリオ未経験者ランキング</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <ul className="timeline">
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <!-- Team--> */}
                <section className="page-section bg-light" id="team">
                </section>
                {/* <!-- Clients--> */}
                {/* <!-- Contact--> */}
                {/* <!-- Footer--> */}
                <footer className="footer py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                            <div className="col-lg-4 my-3 my-lg-0">
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                                <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Portfolio Modals-->
                <!-- Portfolio item 1 modal popup--> */}
                {/* <!-- Portfolio item 2 modal popup--> */}
                {/* <!-- Portfolio item 3 modal popup--> */}
                {/* <!-- Portfolio item 4 modal popup--> */}
                {/* <!-- Portfolio item 5 modal popup--> */}
                {/* <!-- Portfolio item 6 modal popup--> */}
                {/* <!-- Bootstrap core JS-->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
                <!-- Core theme JS-->
                <script src="js/scripts.js"></script>
                <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
                <!-- * *                               SB Forms JS                               * *-->
                <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
                <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
                {/* <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script> */}
            </body>
        </html>
    </div>
  );
}

