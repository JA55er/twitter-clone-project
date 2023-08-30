import Tweet from './Tweet';
import randomImage from '../assets/randomImage.jpg';
import randomImage2 from '../assets/randomImage2.jpg';
import randomImage3 from '../assets/randomImage3.jpg';

const TweetsList = () => {
  const tweets = [
    {
      profileName: 'JA55er',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi, cupiditate 

quaerat consectetur cum voluptas quae commodi placeat, fugiat assumenda 
porro laboriosam praesentium, minima fuga eligendi 
  
  
  
ipsum dolores omnis reiciendis?`,
      attachment: randomImage,
      stats: {
        comments: 15,
        retweets: 142,
        likes: 2,
        views: 500,
      },
    },
    {
      profileName: 'JA55er',
      text: `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Suscipit ipsa culpa, repudiandae omnis, voluptatem animi 
accusantium cum, tempora similique enim est sapiente 
      
optio id velit rerum quam necessitatibus dicta quibusdam.`,
      attachment: randomImage2,
      stats: {
        comments: 52,
        retweets: 124,
        likes: 526,
        views: 6123,
      },
    },
    {
      profileName: 'JA55er',
      text: `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Doloribus accusantium incidunt, distinctio earum est recusandae, suscipit dolorem blanditiis 

dolorum dolor rerum voluptatum nihil, saepe nam libero autem dignissimos. Numquam, illo!`,
      attachment: randomImage3,
      stats: {
        comments: 14,
        retweets: 125,
        likes: 6543,
        views: 437347,
      },
    },
  ];

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} />;
      })}
    </div>
  );
};

export default TweetsList;
