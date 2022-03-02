import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'John Doe',
        username: '0x989nd9ansdnasdasdask8989809sd0a80',
        avatar: 'https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-07-01T00:00:00.000Z',
    },
    {
        displayName: 'John Doe',
        username: '0x989nd9ansdnasdasdask8989809sd0a80',
        avatar: 'https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-07-01T00:00:00.000Z',
    },
    {
        displayName: 'John Doe',
        username: '0x989nd9ansdnasdasdask8989809sd0a80',
        avatar: 'https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-07-01T00:00:00.000Z',
    },
    {
        displayName: 'John Doe',
        username: '0x989nd9ansdnasdasdask8989809sd0a80',
        avatar: 'https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-07-01T00:00:00.000Z',
    },
]

function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {
                tweets.map((tweet, index) => (
                    <Post 
                        key={index}
                        displayName={tweet.displayName}
                        username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(-4)}`}
                        avatar={tweet.avatar}
                        text={tweet.text}
                        isProfileImageNft={tweet.isProfileImageNft}
                        timestamp={tweet.timestamp}
                    />
                ))
            }
        </div>
    )
}

export default Feed