import React from 'react'
import UserNavbar from '../Navbar/UserNavbar'
import styles from './UserDashboard.module.css'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import GoogleMaps from '../Maps/GoogleMap';
import GoogleMaps2 from '../Maps/GoogleMaps2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function UserDashboard() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const SliderData = [
        {
            image:
                'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
    ];

    const CssTextField = styled(TextField)({
        input: {
            color: 'white',
            "&::placeholder": {    // <----- Add this.
                opacity: 1,
            },
        },
        label: { color: 'white' },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    });

    return (
        <div className={styles.Main}>
            <UserNavbar />
            <div className={styles.img}>
                <div className={styles.search}>
                    <CssTextField id="custom-css-outlined-input" fullWidth sx={{ borderRadius: '6px', fontFamily: " font-family: Poppins, sans-serif;" }} label="Content Based Search" variant="outlined" />
                    <button>Search</button>

                </div>
            </div>


            <div className={styles.aaa}>
                <div className={styles.slider}>
                    <h2>Trending 🔥</h2>
                    <Slider  {...settings}>
                        <div className={styles.slick_item} >
                            <div className={styles.abc}>
                                <h3>1</h3>
                            </div>
                        </div>
                        <div className={styles.slick_item}>
                            <div className={styles.abc}>
                                <h3>2</h3>
                            </div>
                        </div>
                        <div className={styles.slick_item}>
                            <div className={styles.abc}>
                                <h3>3</h3>
                            </div>
                        </div>
                        <div className={styles.slick_item}>
                            <div className={styles.abc}>
                                <h3>4</h3>
                            </div>
                        </div>
                        <div className={styles.slick_item}>
                            <div className={styles.abc}>
                                <h3>5</h3>
                            </div>
                        </div>
                        <div className={styles.slick_item}>
                            <div className={styles.abc}>
                                <h3>6</h3>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard