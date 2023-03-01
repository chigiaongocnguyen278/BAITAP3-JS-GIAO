
var array = [];



function addNumberToArray (){
    var number = Number( document.getElementById("InputArray").value);
   

    array.push (number);

    document.querySelector("#txtArray").innerHTML = array ;

    }




document.querySelector("#btnAddNumber").onclick = addNumberToArray;

//1. tổng số dương 
/**
 * 
 * Khối 1: input
 *      Lấy dữ liệu từ mảng đã nhập
 * Khối 2:
 *      B1:  khi user click
 *      + tạo hàm tính tổng số dương 
 *      + gán hàm vào sự kiện click của button 
        B2: trong hàm :
        *      Duyệt mảng, tìm số dương ( thỏa điều kiện >0)
         
        *     Tạo công thức tính tổng các số dương
 *      B3: hiển thị kết quả
 * Khối 3: output
 *  tổng số dương 
 */


function toSum (){
    var resultTotal = 0;

    for (let i = 0; i< array.length; i++) {

          if( array[i] > 0 ){
          resultTotal += array[i] ;
         }

}
     document.querySelector(".result1").innerHTML =`Tổng số dương : ${resultTotal}`;  
}
    
document.querySelector("#btnTotal").onclick = toSum;

// 2. đếm số dương
/**
 * 
 * Khối 1: input
 *      Lấy dữ liệu từ mảng đã nhập
 * Khối 2:
 *      B1:  khi user click
 *      + tạo hàm đếm số dương
 *      + gán hàm vào sự kiện click của button 
        B2: trong hàm :
        *      Duyệt mảng, tìm số dương ( thỏa điều kiện >0)
         
        *     Tạo công thức đếm các số dương
 *      B3: hiển thị kết quả
 * Khối 3: output
 *  đếm  số dương 
 */

function toCount(){
    var count = 0;
    for (let i = 0; i < array.length; i++) {

        if( array[i] > 0 ){
            ++count;
        }
    }
    document.querySelector(".result2").innerHTML =` Đếm số dương : ${count}`;  
}

document.querySelector("#btnCount").onclick = toCount;

// 3. Tìm số nhỏ nhất
/**
 * 
 * Khối 1: input
 *      Lấy dữ liệu từ mảng đã nhập
 * Khối 2:
 *      B1:  khi user click
 *      + tạo hàm tìm số nhỏ nhất
 *      + gán hàm vào sự kiện click của button 
        B2: trong hàm :
           2.1 Giả sử số nhỏ nhất - min : là số ở vị trí đầu tiên (index =0)

 *         2.2 Duyệt mảng : lấy từng số trong mảng so sánh với min
               Nếu có số nhỏ hơn => lưu số nhỏ hơn vào min
           2.3 Hét mảng => số nhỏ nhất được chứa trong biến min   
    
 *      B3: hiển thị kết quả
 * Khối 3: output
 *  số nhỏ nhất
 */

function toFindMin(){
    var min = array[0];
    for (let i = 1; i < array.length; i++) {

        if( array[i] < min ){
            min= array[i];   
        }
    }
    document.querySelector(".result3").innerHTML =`Số nhỏ nhất : ${min}`;  
}

document.querySelector("#btnMin").onclick = toFindMin;

// 4. Tìm số dương nhỏ nhất
/**
 * 
 * Khối 1: input
 *      Lấy dữ liệu từ mảng đã nhập
 * Khối 2:
 *      B1:  khi user click
 *      + tạo hàm tìm số dương nhỏ nhất
 *      + gán hàm vào sự kiện click của button 
        B2: trong hàm :
           
           2.1 Tạo thêm 1 mảng mới dùng để chứa các số dương
           2.2 Lấy các số dương từ mảng cũ và lưu vào trong mảng mới
           2.3 Kiểm tra mảng mới có phần tử hay không. Nếu có thì bắt đầu đi tìm giá trị dương nhỏ nhất. Ngược lại thì thông báo không có số dương

 *         2.2 Duyệt mảng : lấy từng số trong mảng so sánh với min
               Nếu có số nhỏ hơn => lưu số nhỏ hơn vào min
           2.3 Hét mảng => số nhỏ nhất được chứa trong biến min   
    
 *      B3: hiển thị kết quả
 * Khối 3: output
 *  số nhỏ nhất
 */




function toFindMinPositiveNum(){
    var newArray1 = array.filter(item => item > 0);

    if( newArray1 != []) {
   
        var minPositiveNum = newArray1[0];
        for (let i = 1; i < newArray1.length; i++) {
             if( newArray1[i] < minPositiveNum ) minPositiveNum= newArray1[i];     
        }
    document.querySelector(".result4").innerHTML =`Số dương nhỏ nhất : ${minPositiveNum}`;
    } else {
    document.querySelector(".result4").innerHTML =`Không có số dương trong mảng`;
    }  

}



document.querySelector("#btnMinPositive").onclick = toFindMinPositiveNum;

// 5. Tìm số chẵn cuối cùng


function findLastEvenNum(){
    var newArray2 = array.filter(item => item % 2 == 0);

    var lastEvenNum = (newArray2.length>0) ? newArray2[newArray2.length -1] :-1;
   
    document.querySelector(".result5").innerHTML =`Số chẵn cuối cùng : ${lastEvenNum}`;  
}


document.querySelector("#btnEvenNum").onclick = findLastEvenNum;


// 6. Đổi chỗ

function toSwap(){

    // var cloneArray =[...array];
     
    // var index1 = Number(document.querySelector(".SwapIndex1").value);
    // var index2 = Number(document.querySelector(".SwapIndex2").value);

    // [ cloneArray[index1], cloneArray[index2]]=[cloneArray[index2], cloneArray[index1]];

   
    // document.querySelector(".result6").innerHTML =`Mảng sau khi đổi chỗ : ${cloneArray}`;  


     var index1 = Number(document.querySelector(".SwapIndex1").value);
    var index2 = Number(document.querySelector(".SwapIndex2").value);

     [ array[index1], array[index2]]=[array[index2], array[index1]];

   
    document.querySelector(".result6").innerHTML =`Mảng sau khi đổi chỗ : ${array}`;  


}


document.querySelector("#btnSwap").onclick = toSwap;






// 7. Sắp xếp tăng dần
function sortArray(){
        array.sort(function(a,b){
            return a -b;  
        }
    )
    document.querySelector(".result7").innerHTML =`Mảng sau khi sắp xếp : ${array}`;  
}

document.querySelector("#btnSortArray").onclick = sortArray;


// 8. Tìm số nguyên tố đầu tiên 



function isPrime(num){
//false : not prime number
//true   : prime number

           if (isNaN(num) || !isFinite(num) || num % 1 || num <2) return false;

           for (let i= 2; Math.sqrt(num) >= i; i++) {
                 if (num % i == 0) {
                     return false;
                    }
            }
            return true;
 }


 
function findFirstPrime (){

      
    
    for (let i = 0; i < array.length; i++){

        if (isPrime(array[i])) {

          
          document.querySelector(".result8").innerHTML =`Số nguyên tố đầu tiên : ${ array[i]}`;

             break;

        } else{
                 document.querySelector(".result8").innerHTML = -1;
        }
        
      }

}

document.querySelector("#btnPrimeNum").onclick =  findFirstPrime ;
 
    
  
// 9. Đếm số nguyên 


function toCountInteger(){
    var countInt = 0;
    for (let i = 0; i < array.length; i++) {
       if (Number.isInteger(array[i])){
        ++countInt;

       }

    }
    document.querySelector(".result9").innerHTML =`Số nguyên : ${countInt}`;  
}

document.querySelector("#btnCountInteger").onclick = toCountInteger;



// 10. So sánh số lượng số âm và dương

function toCompare(){
    var countNegative = 0;
    var countPositive= 0;

  
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 ){
         ++countPositive;
 
        } else {
        ++countNegative;
        }
    }

    var sign = "";
    if(countNegative > countPositive){
        sign =" > ";
    } else if(countNegative < countPositive) {
        sign =" < ";
    } else {
        sign =" = ";
    }



    document.querySelector(".result10").innerHTML =`Số âm ${sign} số dương` ; 
}
document.querySelector("#btnCompare").onclick = toCompare;

