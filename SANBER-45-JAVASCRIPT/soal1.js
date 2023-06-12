function AkarPangkat2(x) {
      var result = Math.sqrt(x);
      console.log("Akar pangkat 2 dari " + x + " adalah " + result);
      if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
      } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
      }
    }

AkarPangkat2(-1)
AkarPangkat2(1)