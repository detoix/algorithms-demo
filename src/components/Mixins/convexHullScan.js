export default {
    methods: {
      convexHullScan () {
        let points = [
          {
          x: 0,
          y: 0,
          z: 0,
          },
          {
            x: 1,
            y: 1,
            z: -1
          }]

        let sorted = points.sort((a, b) => a.x > b.x)

        if (points.length < 3) {
          return points
        }

        let upper = [points[0], points[1]]
        for (let i = 2; i < points.length; i++) {
          upper.push(points[i])
          while (upper.length > 2 && upper.areLastThreeNonRight()) {
            // upper.removeMiddleOfLastThree();
            upper.splice(upper.length - 2, 1)
          }
        }

        let lower = [points[points.length - 1], points[points.length - 2]]
        for (let i = n - 3; i >= 0; i--) {
          lower.push(points[i]);
          while (lower.length > 2 && lower.areLastThreeNonRight()) {
            // lower.removeMiddleOfLastThree();
            lower.splice(upper.length - 2, 1)
          }
        }

        let hull = upper.slice(1) + lower.slice(1)
        

        console.log(hull)       
      }
    }
  }