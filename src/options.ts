import { type Option, type Options, OptionType } from './types';
import { notImplementedInCompose, notYetImplemented, processBoolean, processOptionWithArgs } from './callbacks';

/* eslint-disable */
const OPTIONS: Array<Option> = [
  { name: 'attach', short: 'a', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'blkio-weight', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'blkio-weight-device', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cgroupns', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cgroup-parent', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cidfile', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-period', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-quota', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-rt-period', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-rt-runtime', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpuset-cpus', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpus', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpuset-mems', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-shares', short: 'c', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-cgroup-rule', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-read-bps', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-read-iops', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-write-bps', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-write-iops', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'dns', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'dns-option', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'dns-search', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'domainname', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'entrypoint', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'env', short: 'e', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'env-file', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'expose', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'gpus', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'group-add', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'health-cmd', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'health-interval', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'health-retries', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'health-start-period', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'health-timeout', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'hostname', short: 'h', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'ip', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'ip6', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'ipc', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'kernel-memory', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'label-file', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'label', short: 'l', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'link', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'link-local-ip', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'log-driver', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'log-opt', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'mac-address', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'memory', short: 'm', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'memory-swap', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'memory-swappiness', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'memory-reservation', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'mount', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'name', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'network', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'network-alias', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'oom-score-adj', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'pid', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'pids-limit', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'platform', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'publish', short: 'p', path: 'ports', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'pull', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'restart', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'runtime', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'security-opt', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'shm-size', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'stop-signal', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'stop-timeout', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'storage-opt', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'tmpfs', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'sysctl', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'ulimit', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'user', short: 'u', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'userns', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'uts', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'volume-driver', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'volumes-from', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'volume', short: 'v', path: 'volumes', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'workdir', short: 'w', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-count', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-percent', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'io-maxbandwidth', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'io-maxiops', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'isolation', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'detach-keys', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'daemon', short: 'd', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
  { name: 'disable-content-trust', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'help', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'init', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'interactive', short: 'i', path: 'stdin_open', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'no-healthcheck', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'oom-kill-disable', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'privileged', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'publish-all', short: 'P', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'quiet', short: 'q', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'read-only', path: '', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'rm', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
  { name: 'tty', short: 't', path: 'tty', type: OptionType.flag, multiValue: false, action: processBoolean },
];
/* eslint-enable */

const AllOptions: Options = {};
OPTIONS.forEach((opt) => (AllOptions[opt.name] = opt));

export const getOption = (optionName: string): Option | undefined =>
  AllOptions[optionName] || OPTIONS.find((o) => o.short === optionName);
