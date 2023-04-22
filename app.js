function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height)) {
      alert('กรุณาใส่ค่าน้ำหนักและส่วนสูงให้ถูกต้อง');
      return '';
    }
    
    let bmi = weight / Math.pow(height/100, 2);
    bmi = bmi.toFixed(2);
    
    let category = '';
    if (bmi < 18.5) {
      category = 'น้ำหนักต่ำกว่ามาตรฐาน';
    } else if (bmi < 25) {
      category = 'น้ำหนักอยู่ในเกณฑ์มาตรฐาน';
    } else if (bmi < 30) {
      category = 'น้ำหนักเกินมาตรฐาน';
    } else {
      category = 'อ้วน';
    }
    
    let resultText = `ค่า BMI ของคุณคือ ${bmi}. เกณฑ์ ${category}.`;
    document.getElementById('result').innerHTML = resultText;
  }



  