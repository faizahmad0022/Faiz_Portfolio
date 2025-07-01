// ListItem.tsx
import React from 'react';
import Image from 'next/image';

type ListItemProps = {
    imageUrl: string;
    mainheading: string;
    maxWords?: number; // Optional prop to specify maximum words to display
    SubHeading: string;
    id?: string;
     
};

const ListItem: React.FC<ListItemProps> = ({ imageUrl, mainheading, maxWords = 7, SubHeading, id }) => {
    // Function to truncate description to specified number of words
    const truncateDescription = (description: string, maxWords: number): string => {
        const words = description.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return description;
    };

    return (
        <div className="p-4 mb-4 flex items-center rounded-md border-slate-400 border-2 bg-slate-700 ">

            <div className="rounded-full overflow-hidden mr-4 ">
                <Image src={imageUrl} alt="Profile" width={80} height={80} />
            </div>
            <div className="flex-1">
                {mainheading && <h2 className="text-lg font-semibold mb-2">{mainheading}</h2>}
                <p>{truncateDescription(SubHeading, maxWords)}</p>
            </div>

        </div>
    );
};

export default ListItem;
