for (let i = 3; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        if (j !== 3) { // حذف ضرب در عدد 3
            console.log(`${i} × ${j} = ${i * j}`);
        }
    }
    console.log('-------------------'); // جداکننده هر جدول
}