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
	return map{
		# 区切りタブで分割し、それぞれさらにkeyと値に分割しハッシュに格納
		my %logdata;
		my @fields = split(/\t/,$_);
		foreach my $field(@fields){
			my @k_v = split(/:/,$field);
			my $key = $k_v[0];
			my $value = $k_v[1];
			print "\n";
			if($value ne '-'){
				$logdata{$key} = $value;
			}
		}
		$_ = bless \%logdata,'Log';
	} @lines;
}

1;
