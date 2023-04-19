switch(process.platform) {
  case 'darwin': process.exit(1)
  case 'linux': process.exit(2)
  case 'win32': process.exit(3)
}