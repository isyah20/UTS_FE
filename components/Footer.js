import react from 'react';

const footer = () => {
    return(
    <div className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Social Media</h4>
                        <ul className="list-unstyled">
                            <li>Tiktok    : @12sunday</li>
                            <li>Instagram : @morn_ing</li>
                            <li>Whatsapp  : 085xxxxxxxxx</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4></h4>
                        <ul className="list-unstyled">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4></h4>
                        <ul className="list-unstyled">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4></h4>
                        <ul className="list-unstyled">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} - All Rights Reserved
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
    );
}
export default footer
