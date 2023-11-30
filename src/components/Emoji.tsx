import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [Key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "18px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "18px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "23px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
