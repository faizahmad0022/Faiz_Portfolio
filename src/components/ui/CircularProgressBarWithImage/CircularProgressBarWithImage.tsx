import styles from "./CircularProgressBarWithImage.module.css";

import React, { ReactNode } from 'react';

interface ContainerProps {
    title: string;
    rating: number;
    imageurl: string;
}

const CircularProgressBarWithImage: React.FC<ContainerProps> = ({ title, rating, imageurl = "https://devprofiles.thundertechsol.com/devdock/public/tools/xcode.png" }) => {
    const customStyles: any = {
        '--progress': `${rating * 3.6}deg`,
    };
    return (
        <div className="text-center gap-4">
            <div
                className={`${styles.progressBar} flex text-base lg:text-xl`}

                style={customStyles}
            >
                <div className="rounded-full overflow-hidden bg-gray-800" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100px', height: '100px',

                }}>
                    <picture style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={imageurl} width={55} height={55} alt={''}
                            style={{
                                alignSelf: 'center'
                            }}
                            onError={(e) => console.error('Image loading error:', e)}
                        />
                    </picture>

                </div>
            </div>
            <p className="px-4 pt-4 text-xl">{title}</p>

        </div>

    )
};

export default CircularProgressBarWithImage;
