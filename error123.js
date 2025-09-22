try {
    let result = riskyFunction();
    console.log(result);
} catch (err) {
    console.error("An error occurred: " + err.message);
    
}finally {
    console.log("Execution completed.");
}