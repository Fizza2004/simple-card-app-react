import tayotaImage from '../../assets/images/tayota_carolla.webp';
import mercedesImage from '../../assets/images/mercedes.avif';
import './style.scss'; //Import SCSS file

const carDetails = [
  {imageUrl:tayotaImage,
  price: "16 970",
  title: "Toyota Corolla",
  description: "The Toyota Corolla combines reliability, fuel efficiency, and comfort, making it an ideal choice for both daily commutes and longer drives. This model boasts a sleek design, spacious interior, and advanced safety features for a confident and comfortable ride."
},
{
  imageUrl:mercedesImage,
  price: "60 800",
  title: "Mercedes GLE",
  description: "The Mercedes GLE offers a blend of luxury, power, and advanced technology. With its bold design, spacious cabin, and cutting-edge features, the GLE provides an exceptional driving experience. This SUV is equipped with a powerful engine for smooth acceleration and confident handling."
}
];

const Card = () => {
  return (
    <div className="car-cards-container">
      {carDetails.map((carData, index)=>(
        <div className="car-card"  key={index}>
          <div className="card-image">
            <img src={carData.imageUrl} alt="card-image"/>
          </div>
          <div className="card-price">{carData.price} AZN</div>
          <div className="card-title">{carData.title}</div>
          <div className="card-description"><p>{carData.description}</p></div>
        </div>
      ))}
  </div>
  );
};

export default Card;