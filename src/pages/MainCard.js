import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import PeopleCardFooter from "@mui-treasury/components/cardFooter/people";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { Column, Row, Item } from "@mui-treasury/components/flex";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
    marginTop: "50px",
  },
  content: {
    padding: 24,
  },
}));

export const MainCard = React.memo(function EngagementCard() {
  const cardStyles = useStyles();
  const wideCardMediaStyles = useWideCardMediaStyles();
  const fadeShadowStyles = useFadedShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
      <CardMedia
        // component={'img'} // add this line to use <img />
        classes={wideCardMediaStyles}
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={"Restarant Mama"}
          body={
            "We are going to learn different kinds of species in nature that live together to form amazing environment."
          }
        />
      </CardContent>
      <Row wrap gap={1} px={2} pb={2}>
        <Item grow>
          <Button variant={"contained"} fullWidth>
            No
          </Button>
        </Item>
        <Item grow>
          <Button variant={"contained"} color={"primary"} fullWidth>
            Eat!
          </Button>
        </Item>
      </Row>
    </Card>
  );
});

export default MainCard;
