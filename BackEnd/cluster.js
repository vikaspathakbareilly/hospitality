const cluster = require("cluster");
const os = require("os");

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {

    console.log(`Primary Process: ${process.pid}`);

    console.log(`Total CPUs: ${totalCPUs}`);

    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {

        console.log(
            `Worker ${worker.process.pid} died`
        );

        console.log("Starting New Worker...");

        cluster.fork();
    });

} else {
    console.log("sdffgfdgdsfs")
    require("./server");
}