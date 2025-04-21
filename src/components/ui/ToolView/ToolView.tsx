import Image from 'next/image';

interface ToolViewsProps {
    name: string;
    image: string;
}

const ToolViews: React.FC<ToolViewsProps> = ({ name, image }) => {
    if (!name || !image) {
        return null; // Return null if either name or image is missing
    }

    return (
        <div className="text-center  " style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="rounded-full  overflow-hidden bg-gray-700" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '120px', height: '120px',

            }}>
                <picture style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={image} width={70} height={70} alt={''}
                        style={{
                            alignSelf: 'center'
                        }}
                        onError={(e) => console.error('Image loading error:', e)}
                    />
                </picture>

            </div>
            <p className="pt-2 text-base	 ">{name}</p>
        </div>
    )
};

export default ToolViews;
