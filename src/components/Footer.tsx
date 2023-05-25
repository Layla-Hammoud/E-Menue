import './footer.css'
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className='footer-item' ><a href='#' className='footer-link'>About Us</a></div>
                    <div className='footer-item'><a href='#' className='footer-link'>Contact Us</a></div>
                    <div className='footer-item'><a href='#' className='footer-link'>Delivery Information</a></div>
                    <div className='footer-item'><a href='#' className='footer-link'>Refund Policy</a></div>
                    <div className='footer-item'><a href='#' className='footer-link'>Private Policy</a></div>
                    <div className='footer-item'><a href='#' className='footer-link'>Terms of Service</a></div>
                    <div className='footer-item'><a href='#' className='footer-link'>Our Brands</a></div>
                </div>   
                    <p className='copyRights'>&copy; 2023 Grid Food. All rights reserved.</p>    
            </footer>
        </>
    )
}
export default Footer