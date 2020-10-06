function rotate(mat) {

  let end = mat.length - 1;

  const ringCount = end / 2;

  for(let ring = 0; ring < ringCount; ring++) {

    let limit = end - (ring * 2); // trim off all sides

    for(let offset = 0; offset < limit; offset++) {

      const [top, right, bottom, left] = calculatePositions(ring, offset, end);

      let displaced = getVal(mat, top);
      displaced = swapVal(mat, right, displaced);
      displaced = swapVal(mat, bottom, displaced);
      displaced = swapVal(mat, left, displaced);
      setVal(mat, top, displaced);
    }
  }

  return mat;
}

function calculatePositions(ring, offset, end) {

  /*
      A B C D
      E F G H
      I J K L
      M N O P

      Initially,
        top = A
        right = D
        bottom = P
        left = M
  */
  const top = [ring, ring + offset];
  const right = [ring + offset, end - ring];
  const bottom = [end - ring, end - ring - offset];
  const left = [end - ring - offset, ring];

  return [top, right, bottom, left];
}

function getVal(mat, pos) {
  return mat[pos[0]][pos[1]];
}

function setVal(mat, pos, val) {
  mat[pos[0]][pos[1]] = val;
}

function swapVal(mat, pos, val) {
  const displaced = getVal(mat, pos);
  setVal(mat, pos, val);
  return displaced;
}

module.exports = rotate;
