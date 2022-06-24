
export function CalculateMax(weight,reps,RPE) {
  const RPE_grid=[
    [1,	0.955,	0.922,	0.892,	0.863,	0.837,	0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599],
    [0.9775,	0.9385,	0.907,	0.8775,	0.85,	0.824,	0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855],
    [0.955,	0.922,	0.892,	0.863,	0.837,	0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572],
    [0.9385,	0.907,	0.8775,	0.85,	0.824,	0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585],
    [0.922,	0.892,	0.863,	0.837,	0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545],
    [0.907,	0.8775,	0.85,	0.824,	0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315],
    [0.892,	0.863,	0.837,	0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518],
    [0.8775,	0.85,	0.824,	0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045],
    [0.863,	0.837,	0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491],
    [0.85,	0.824,	0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045,	0.4775],
    [0.837,	0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491,	0.464],
    [0.824,	0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045,	0.4775,	0.4505],
    [0.811,	0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491,	0.464,	0.437],
    [0.7985,	0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045,	0.4775,	0.4505,	0.4235],
    [0.786,	0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491,	0.464,	0.437,	0.41],
    [0.774,	0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045,	0.4775,	0.4505,	0.4235,	0.3965],
    [0.762,	0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491,	0.464,	0.437,	0.41,	0.383],
    [0.7505,	0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045,	0.4775,	0.4505,	0.4235,	0.3965,	0.3695],
    [0.739,	0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491,	0.464,	0.437,	0.41,	0.383,	0.356],
    [0.723,	0.6935,	0.6665,	0.6395,	0.6125,	0.5855,	0.5585,	0.5315,	0.5045,	0.4775,	0.4505,	0.4235,	0.3965,	0.3695,	0.3425],
    [0.707,	0.68,	0.653,	0.626,	0.599,	0.572,	0.545,	0.518,	0.491,	0.464,	0.437,	0.41,	0.383,	0.356,	0.329]];

  //console.log("---");
  //console.log("RPE: ",RPE);
  //console.log("weight===undefined", weight===undefined);
  //console.log("reps===undefined", reps===undefined);
  //console.log("RPE===undefined", RPE===undefined);
  //console.log("reps>15", reps>15);
  //console.log("RPE>10", RPE>10);
  //console.log("parseFloat(RPE)%1!==1", parseFloat(RPE)%1!==0);

  RPE*=2;

  if (weight===undefined || reps===undefined || RPE===undefined || repsError(reps) || RPEError(RPE/2)) {
    return undefined;
  }
  console.log("calculating max "); 
  let max=(weight)/RPE_grid[20-RPE][reps-1];
  max=max.toFixed(1);
  return max; 

}

export function repsError(reps) {
  return reps>15;
};

export function RPEError(RPE) {
  return (((parseFloat(RPE)*2)%1!== 0 && RPE!=="") || RPE>=20)
};
