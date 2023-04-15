switch(process.platform){
    case 'darwin': process.exit(1)
    case 'win32': process.exit(2)
    case 'linux': process.exit(3)
}
