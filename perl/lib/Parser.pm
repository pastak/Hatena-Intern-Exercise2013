package Parser;
use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless \%args, $class;
}

sub parse {
	my ($self) = @_;
	open my $fh, '<', $self->{filename}  or die $!;
	my @lines = <$fh>;
	my @result;
	for(my $i = 0;$i <= $#lines;$i++){
		# 区切りタブで分割し、それぞれさらにkeyと値に分割しハッシュに格納
		my $line = $lines[$i];
		my %logdata;
		chomp($line);
		my @fields = split(/\t/,$line);
		foreach my $field(@fields){
			my $value = "";
			my @k_v = split(/:/,$field);
			my $key = $k_v[0];
			if($key eq "referer"){
				$value = $k_v[1].':'.$k_v[2];
			}else{
				$value = $k_v[1];
			} 
			if($value ne '-'){
				$logdata{$key} = $value;
			}
		}
		$result[$i]=(bless \%logdata,'Log');
	}
	return [@result];
}

1;
