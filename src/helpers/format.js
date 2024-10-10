export const formarSize = (size) => {
    return (
        size < 1024
          ? (size += "Bbps")
          : (size =
            size < 1048576
                ? (size / 1024).toFixed(0) + "Kbps"
                : size < 1073741824
                ? (size / 1048576).toFixed(0) + "Mbps"
                : (size / 1073741824).toFixed(2) + "Gbps"),
        size
      );
}