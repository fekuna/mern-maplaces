import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Kuta Bali",
    description: "One of the most beautiful beach in indonesia",
    imageUrl:
      "https://hotel.discount/assets/images/blog/pesona-pantai-kuta-bali.png",
    address: "Kuta, Kabupaten Badung, Bali",
    location: {
      lat: -8.7180324,
      lng: 115.1592798,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Bali Kuy",
    description: "One of the most beautiful beach in indonesia",
    imageUrl:
      "https://hotel.discount/assets/images/blog/pesona-pantai-kuta-bali.png",
    address: "Kuta, Kabupaten Badung, Bali",
    location: {
      lat: -8.7180324,
      lng: 115.1592798,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
