import { useState, useEffect } from "react";
import { List } from "../UI/List/List";
import { Modal } from "../UI/Modal/Modal";

type TDogsListType = {
  [key: string]: string[];
};

export const DogList = () => {
  const [dogsList, setDogsList] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [randomDogImg, setRandomDogImg] = useState("");

  const flattenDogsList = (dogsListObject: TDogsListType) => {
    return Object.keys(dogsListObject).reduce((dogArray, dogCategory) => {
      if (dogsListObject[dogCategory].length) {
        const subCategories = dogsListObject[dogCategory].map(
          (dogSubCategory) => `${dogSubCategory} ${dogCategory}`
        );

        return [...dogArray, ...subCategories];
      } else {
        return [...dogArray, dogCategory];
      }
    }, [] as string[]);
  };

  useEffect(() => {
    const getDogsList = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const flatList = flattenDogsList(data.message);
        setDogsList(flatList);
      } catch (error) {
        throw new Error(error);
      }
    };

    getDogsList();
  }, []);

  const toggleModal = async () => {
    if (!isModalVisible) {
      await fetchRandomDogImg();
    }
    setIsModalVisible(!isModalVisible);
  };

  const fetchRandomDogImg = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setRandomDogImg(data.message);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <List listItems={dogsList} onListItemClick={toggleModal} />
      {isModalVisible && (
        <Modal
          onCloseModal={toggleModal}
          onImgLoad={fetchRandomDogImg}
          imgSrc={randomDogImg}
        />
      )}
    </>
  );
};
