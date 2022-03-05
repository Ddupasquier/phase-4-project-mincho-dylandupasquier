import React, { useState, useEffect } from "react";
import SortSearch from "./SortSearch";

function Main() {
  const [allParks, setAllParks] = useState([]);

  useEffect(() => {
    fetch(
      "https://developer.nps.gov/api/v1/parks?limit=10&start=0&q=data&api_key=gNJoHqgkJgXhDR0HejOhKQSVeu9iW825MiQB3NpL"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllParks(data);
      });
  }, []);

  console.log(allParks);

  return (
    <main>
      <SortSearch />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Neque gravida in
      fermentum et. Egestas congue quisque egestas diam in arcu cursus. Congue
      mauris rhoncus aenean vel. Vestibulum lorem sed risus ultricies tristique
      nulla aliquet enim tortor. Vestibulum rhoncus est pellentesque elit
      ullamcorper dignissim cras. Scelerisque mauris pellentesque pulvinar
      pellentesque habitant morbi tristique senectus et. Bibendum est ultricies
      integer quis auctor. Commodo sed egestas egestas fringilla phasellus
      faucibus scelerisque eleifend donec. Et tortor consequat id porta nibh. Id
      diam vel quam elementum pulvinar etiam. Egestas integer eget aliquet nibh
      praesent tristique magna sit amet. Cursus euismod quis viverra nibh cras.
      Sit amet massa vitae tortor condimentum lacinia quis. Et ligula
      ullamcorper malesuada proin libero nunc consequat interdum. Tempus iaculis
      urna id volutpat. Magna ac placerat vestibulum lectus. Lorem mollis
      aliquam ut porttitor. Amet porttitor eget dolor morbi non arcu risus.
      Bibendum ut tristique et egestas quis ipsum suspendisse. Aliquet nibh
      praesent tristique magna sit amet. Arcu non sodales neque sodales ut.
      Tellus cras adipiscing enim eu turpis egestas pretium aenean. Sed velit
      dignissim sodales ut eu sem. Lorem ipsum dolor sit amet. Massa sapien
      faucibus et molestie ac feugiat sed lectus vestibulum. Tincidunt eget
      nullam non nisi est sit. Et egestas quis ipsum suspendisse ultrices
      gravida dictum fusce ut. Est ultricies integer quis auctor elit.
      Scelerisque eu ultrices vitae auctor eu augue ut lectus. Eget est lorem
      ipsum dolor sit amet consectetur adipiscing. Dictum sit amet justo donec
      enim diam vulputate ut pharetra. Habitant morbi tristique senectus et
      netus. Arcu risus quis varius quam quisque id diam vel quam. Sodales ut
      etiam sit amet nisl purus in. Duis convallis convallis tellus id interdum
      velit laoreet id. Amet consectetur adipiscing elit ut aliquam purus. Nibh
      sit amet commodo nulla facilisi. Turpis massa sed elementum tempus egestas
      sed. Amet cursus sit amet dictum sit amet justo donec. Rutrum tellus
      pellentesque eu tincidunt tortor aliquam nulla. Aliquam sem fringilla ut
      morbi tincidunt. Venenatis tellus in metus vulputate. Ornare arcu dui
      vivamus arcu felis bibendum ut tristique. Turpis in eu mi bibendum neque
      egestas congue quisque. Neque volutpat ac tincidunt vitae semper.
      Pellentesque id nibh tortor id aliquet lectus proin. Dolor morbi non arcu
      risus quis varius quam quisque id. Netus et malesuada fames ac turpis
      egestas. Platea dictumst quisque sagittis purus. Et leo duis ut diam quam
      nulla. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum.
      Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
      Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Mauris sit amet
      massa vitae tortor condimentum lacinia quis. Lacinia quis vel eros donec
      ac odio tempor orci dapibus. Ut sem viverra aliquet eget sit amet tellus.
      Adipiscing tristique risus nec feugiat. Lacinia quis vel eros donec ac
      odio. Donec et odio pellentesque diam volutpat commodo sed. At volutpat
      diam ut venenatis tellus in metus vulputate eu. Fermentum posuere urna nec
      tincidunt. Vestibulum morbi blandit cursus risus at ultrices mi tempus.
      Purus semper eget duis at tellus at. Magna fringilla urna porttitor
      rhoncus dolor purus non enim. Pulvinar mattis nunc sed blandit. Amet nulla
      facilisi morbi tempus iaculis urna. Tempus egestas sed sed risus pretium
      quam vulputate dignissim. Ipsum a arcu cursus vitae congue mauris rhoncus.
      Duis at consectetur lorem donec massa sapien faucibus et. Egestas dui id
      ornare arcu odio ut sem nulla pharetra. Urna condimentum mattis
      pellentesque id nibh tortor id aliquet lectus. Rhoncus urna neque viverra
      justo nec ultrices dui sapien. Viverra ipsum nunc aliquet bibendum enim.
      Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Mi eget
      mauris pharetra et ultrices neque ornare aenean. Ac auctor augue mauris
      augue neque gravida. Ipsum a arcu cursus vitae congue. Est pellentesque
      elit ullamcorper dignissim cras tincidunt lobortis feugiat. Nibh ipsum
      consequat nisl vel pretium lectus quam id.
    </main>
  );
}

export default Main;
