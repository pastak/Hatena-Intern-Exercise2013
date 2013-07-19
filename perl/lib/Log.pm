package Log;
use strict;
use warnings;
use DateTime;

sub new {
    my ($class, %args) = @_;
	my $request = $args{req};
	my @request_data = split(/\s/,$request);
	$args{method} = $request_data[0];
	$args{path} = $request_data[1];
	$args{protocol} = $request_data[2];
    return bless  \%args, $class;
}

sub protocol {
	my ($self) = @_;
	return $self->{protocol};
}

sub method {
	my ($self) = @_;
	return $self->{method};
}

sub path {
	my ($self) = @_;
	return $self->{path};
}

sub uri {
	# TODO : http or https チェックする？
	return 'http://'.$self->{host}.$self->{path};
}

sub time {
	# YYYY-MM-DDThh:mm:ss で出力
	my ($self) = @_;
	my $dt = DateTime->from_epoch(epoch => $self->{epoch});
	my $ftime = $dt->strftime('%Y-%m-%dT%H:%M:%S');
	return $ftime;
}

1;
