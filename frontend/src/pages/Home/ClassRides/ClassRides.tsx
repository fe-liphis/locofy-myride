import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import basic from "../../../assets/carsClass/basic.png";
import comfort from "../../../assets/carsClass/comfort.png";
import business from "../../../assets/carsClass/business.png";
import deluxe from "../../../assets/carsClass/basic.png";

function ClassRides() {
  return (
    <section>
      <h3>Why should you ride with us?</h3>
      <h2>Best in class rides</h2>
      <ul>
        <li>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={basic}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </li>
      </ul>
    </section>
  );
}

export default ClassRides;
