import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container ">
        <div className="row">
          <div className="col-md-4 left d-flex align-items-center">
            <div className="social">
              <span class="f-social">
                <a
                  href="https://facebook.com/tegar7jr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </span>
              <span class="f-social">
                <a
                  href="https://twitter.com/kaktegar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </span>
              <span class="f-social">
                <a
                  href="https://www.youtube.com/channel/UCbVtm4KuTdIkzWABN8yNyFg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </span>
              <span class="f-social">
                <a
                  href="https://instagram.com/kaktegar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-4 mid text-center d-flex align-items-center justify-content-center">
            <span>Footer</span>
          </div>
          <div className="col-md-4 right d-flex align-items-center justify-content-end">
            <div className="copyright text-end">
              <span>
                Copyright © 2022
                <a
                  href="https://tegarsaputradev.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="name"
                >
                  &nbsp;Tegar Saputra
                </a>
                <br />
                tegaracs.ti@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
