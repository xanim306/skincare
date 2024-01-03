import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
function Footer({ categories }) {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_inner">
            <div className="footer_col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="33"
                viewBox="0 0 118 33"
                fill="none"
              >
                <path
                  d="M56.6166 9.15723V25.0464H52.9395V18.5317H45.7212V25.0464H42.0441V9.15723H45.7212V15.422H52.9395V9.15723H56.6166Z"
                  fill="black"
                />
                <path
                  d="M72.2561 12.8345L66.7404 25.7956C65.5597 28.7465 63.88 29.6316 61.6782 29.6316C60.4292 29.6316 59.0685 29.2228 58.2746 28.5193L59.5684 26C60.1124 26.4764 60.8615 26.7719 61.565 26.7719C62.5413 26.7719 63.086 26.3411 63.5624 25.2517L63.6087 25.1385L58.3194 12.8345H61.9738L65.401 21.1194L68.8517 12.8345H72.2561Z"
                  fill="black"
                />
                <path
                  d="M85.9655 12.8342V23.0033C85.9655 27.5435 83.5138 29.6313 79.1111 29.6313C76.7954 29.6313 74.5489 29.0638 73.1183 27.9515L74.5261 25.4094C75.57 26.2489 77.2726 26.7937 78.8391 26.7937C81.3356 26.7937 82.4259 25.6586 82.4259 23.4569V22.9349C81.4944 23.956 80.1558 24.4552 78.5671 24.4552C75.1848 24.4552 72.4611 22.1175 72.4611 18.5535C72.4611 14.9903 75.1848 12.6519 78.5671 12.6519C80.269 12.6519 81.6768 13.2194 82.6067 14.3993V12.8342H85.9655ZM82.4699 18.5543C82.4699 16.7613 81.1305 15.5586 79.2692 15.5586C77.4078 15.5586 76.0463 16.7613 76.0463 18.5543C76.0463 20.3473 77.4078 21.5507 79.2692 21.5507C81.1305 21.5507 82.4699 20.3473 82.4699 18.5543Z"
                  fill="black"
                />
                <path
                  d="M101.854 12.8342V23.0033C101.854 27.5435 99.4023 29.6313 94.9996 29.6313C92.6839 29.6313 90.4374 29.0638 89.0068 27.9515L90.4146 25.4094C91.4585 26.2489 93.1611 26.7937 94.7276 26.7937C97.2242 26.7937 98.3144 25.6586 98.3144 23.4569V22.9349C97.3829 23.956 96.0443 24.4552 94.4557 24.4552C91.0733 24.4552 88.3496 22.1175 88.3496 18.5535C88.3496 14.9903 91.0733 12.6519 94.4557 12.6519C96.1575 12.6519 97.5653 13.2194 98.4952 14.3993V12.8342H101.854ZM98.3584 18.5543C98.3584 16.7613 97.019 15.5586 95.1577 15.5586C93.2963 15.5586 91.9348 16.7613 91.9348 18.5543C91.9348 20.3473 93.2963 21.5507 95.1577 21.5507C97.0198 21.5507 98.3584 20.3473 98.3584 18.5543Z"
                  fill="black"
                />
                <path
                  d="M117.04 19.9397H107.801C108.142 21.46 109.436 22.3914 111.298 22.3914C112.591 22.3914 113.522 22.0055 114.362 21.2108L116.245 23.2537C115.11 24.5475 113.408 25.229 111.206 25.229C106.984 25.229 104.237 22.573 104.237 18.9414C104.237 15.2863 107.029 12.6538 110.751 12.6538C114.338 12.6538 117.107 15.0599 117.107 18.9862C117.108 19.2582 117.062 19.6442 117.04 19.9397ZM107.756 17.874H113.771C113.521 16.3302 112.364 15.3319 110.775 15.3319C109.164 15.3319 108.006 16.3074 107.756 17.874Z"
                  fill="black"
                />
                <path
                  d="M32.5777 16.2888C32.5777 7.29275 25.2849 0 16.2888 0C7.29275 0 0 7.29275 0 16.2888C0 20.3808 1.52024 24.1104 4.01143 26.9715V15.1166H9.64718V22.6767H16.3944V15.1166H22.0302V31.5171C28.1894 29.193 32.5777 23.261 32.5777 16.2888Z"
                  fill="#00CC96"
                />
                <path
                  d="M9.64737 27.0386V31.1526C11.6774 32.0612 13.9209 32.5778 16.289 32.5778C16.3247 32.5778 16.3597 32.5725 16.3954 32.5725V27.0386H9.64737Z"
                  fill="#00CC96"
                />
                <path
                  d="M16.395 15.1167V22.6769H9.64777V15.1167H4.01126V26.9717C5.55581 28.7449 7.47264 30.1793 9.64701 31.1525V27.0385H16.3943V32.5725C18.3795 32.5596 20.2735 32.1797 22.03 31.5172V15.1167H16.395Z"
                  fill="white"
                />
                <path
                  d="M24.9832 5.41625C24.9026 5.42613 24.661 5.45272 24.3556 5.48463C24.1437 5.50666 23.937 5.52414 23.798 5.53477C23.5222 5.03335 23.0337 4.68311 22.4228 4.68311C21.9427 4.68311 21.5522 4.83202 21.2247 5.24151C20.9497 5.58492 20.7712 6.059 20.5972 6.30591C19.1795 8.31542 16.9193 8.66642 14.2701 8.66642C13.6592 8.66642 13.0674 8.59121 12.4961 8.45977C12.4041 8.4385 12.3137 8.53119 12.3555 8.61628C13.4275 10.7838 15.9825 12.3504 18.0581 12.6938V15.0877H18.6629V12.7569C18.7229 12.7599 18.7844 12.766 18.8437 12.7667C19.2175 12.769 19.5541 12.7394 19.8732 12.6923V15.0877H20.4779V12.5677C21.4572 12.301 22.1835 11.77 22.8126 11.0049C23.5708 10.0826 24.0137 8.44306 24.0403 6.84761C24.1391 6.74656 24.3678 6.50724 24.5212 6.30135C24.8738 5.82727 25.1503 5.39498 24.9832 5.41625ZM22.5733 6.48293C22.3134 6.48293 22.103 6.27248 22.103 6.01265C22.103 5.75282 22.3134 5.54237 22.5733 5.54237C22.8331 5.54237 23.0436 5.75282 23.0436 6.01265C23.0436 6.27248 22.8331 6.48293 22.5733 6.48293Z"
                  fill="white"
                />
              </svg>
              <p className="rights">© 2020 - All rights reserved</p>
              <div className="footer_icons">
                <div className="footer_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.5 1H5.5C3.01472 1 1 3.01472 1 5.5V14.5C1 16.9853 3.01472 19 5.5 19H14.5C16.9853 19 19 16.9853 19 14.5V5.5C19 3.01472 16.9853 1 14.5 1Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6 9.43229C13.7111 10.1813 13.5831 10.9463 13.2344 11.6184C12.8856 12.2905 12.3338 12.8356 11.6575 13.176C10.9811 13.5164 10.2146 13.6349 9.46701 13.5146C8.71941 13.3943 8.02878 13.0414 7.49335 12.5059C6.95792 11.9705 6.60496 11.2799 6.48466 10.5323C6.36436 9.78469 6.48286 9.0182 6.82329 8.34183C7.16373 7.66546 7.70877 7.11366 8.38089 6.76491C9.053 6.41616 9.81798 6.28822 10.567 6.39929C11.331 6.51259 12.0384 6.86861 12.5845 7.41477C13.1307 7.96093 13.4867 8.66826 13.6 9.43229Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.95 5.05029H14.9583"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                </div>
              <div className="footer_icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 4.00897C21.1294 4.61128 20.1656 5.07195 19.1455 5.37324C18.5979 4.75576 17.8703 4.3181 17.0609 4.11947C16.2516 3.92083 15.3995 3.9708 14.6201 4.26261C13.8406 4.55442 13.1713 5.07399 12.7027 5.75105C12.2341 6.42812 11.9888 7.23001 12 8.04827V8.93995C10.4024 8.98058 8.81934 8.63305 7.39183 7.92829C5.96431 7.22354 4.73665 6.18362 3.81818 4.90082C3.81818 4.90082 0.181818 12.9258 8.36364 16.4925C6.49139 17.739 4.26105 18.364 2 18.2758C10.1818 22.7342 20.1818 18.2758 20.1818 8.02152C20.181 7.77315 20.1566 7.52539 20.1091 7.28143C21.0369 6.38395 21.6917 5.25082 22 4.00897Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
             <div className="footer_icon">
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
             </div>
              
              </div>
            </div>
            <div className="footer_col">
              <p className="col_title">Categories</p>
              {categories.length ? (
                <ul className="category_list">
                  {categories[0].children.map((cat) => (
                    <li key={cat.id}>
                      <div className="category_icon">
                        <NavLink to={`${cat.id}/category`}>{cat.name}</NavLink>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                "No category yet..."
              )}
            </div>
            <div className="footer_col">
              <p className="col_title">Legal</p>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Return Policy</li>
                <li>Shipping</li>
                <li>Data Protection</li>
              </ul>
            </div>
            <div className="footer_col">
              <p className="col_title">Company</p>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Vision</li>
                <li>Culture</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Footer);
